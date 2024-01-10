import axios from "axios";

const baseUrl = document.documentElement.dataset.base || window.location.origin + '/wp-content/themes/3d';

const FPS = 40;

const sequenceFolderUrl = baseUrl + '/assets/images/houseSequence/';
const imagesCount = 351;

const $canvas = document.querySelector('.canvas img');
const loadedImages = [];
let onLoadImagesCallback = () => { };


let isLoaded = false;
let currentFrame = 0;
let currentSequenceNumberAnimated = 0;

const definedBlocksKeyFrames = {
    '0': 18,
    '1': 33,
    '2': 132,
    '3': 162,
    '4': 200,
    '5': 239,
    '6': 350,
}



function loadImages() {
  const requests = [];

  for (let i = 0; i < imagesCount; i++) {
    const request = axios.get(sequenceFolderUrl + i + '.jpg', { responseType: 'blob' })
      .then(response => URL.createObjectURL(response.data));
    requests.push(request);
  }

  return Promise.all(requests)
    .then(urls => {
      urls.forEach((url, i) => {
        loadedImages[i] = url;
      });
    });
}

// Rest of your code...


gsap.to($canvas, {
    autoAlpha: 0,
}, '<');



loadImages()
    .then(() => {
        isLoaded = true;
        gsap.to($canvas, {
            autoAlpha: 1,
        }, '<');
        onLoadImagesCallback();
    });




document.querySelectorAll('.technologies-section-1__card').forEach((card, i) => {
    ScrollTrigger.create({
        trigger: card,
        start: '20% center',
        end: '80% center',
        onToggle: (self) => {
            if (!self.isActive) return;
            currentSequenceNumberAnimated = i;
            animateFromTo({
                start: currentFrame,
                end: definedBlocksKeyFrames[i],
                sequenceId: currentSequenceNumberAnimated,
                changeState: (frame) => {
                    if (!loadedImages[frame]) {
                        return;
                    }
                    $canvas.src = loadedImages[frame];
                    currentFrame = frame;
                }
            });

            if (!isLoaded) {
                onLoadImagesCallback = () => {
                    animateFromTo({
                        start: currentFrame,
                        end: definedBlocksKeyFrames[i],
                        sequenceId: currentSequenceNumberAnimated,
                        changeState: (frame) => {
                            if (!loadedImages[frame]) {
                                return;
                            }
                            $canvas.src = loadedImages[frame];
                            currentFrame = frame;
                        }
                    });
                }
            }
        }
    });

    if (document.documentElement.clientWidth < 1024) {
      ScrollTrigger.create({
        trigger: card,
        start: '-10% center',
        end: '50% center',
        onToggle: (self) => {
          if (!self.isActive) return;
          currentSequenceNumberAnimated = i;
          animateFromTo({
            start: currentFrame,
            end: definedBlocksKeyFrames[i],
            sequenceId: currentSequenceNumberAnimated,
            changeState: (frame) => {
              if (!loadedImages[frame]) {
                return;
              }
              $canvas.src = loadedImages[frame];
              currentFrame = frame;
            }
          });

          if (!isLoaded) {
            onLoadImagesCallback = () => {
              animateFromTo({
                start: currentFrame,
                end: definedBlocksKeyFrames[i],
                sequenceId: currentSequenceNumberAnimated,
                changeState: (frame) => {
                  if (!loadedImages[frame]) {
                    return;
                  }
                  $canvas.src = loadedImages[frame];
                  currentFrame = frame;
                }
              });
            }
          }
        }
      });
    }
});



function animateFromTo({
    start, end, changeState = () => { }, sequenceId
}) {
    let currentPoint = start;
    function increase() {
        if (currentPoint == end || sequenceId !== currentSequenceNumberAnimated) {
            changeState(currentPoint);
            return;
        }
        changeState(currentPoint);
        currentPoint = start>end ? currentPoint - 1 : currentPoint + 1;
        setTimeout(() => requestAnimationFrame(increase), 1000/FPS);
    }
    increase();
};
