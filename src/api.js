/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
/* eslint-disable */

const objArray = [{ currency: 'ETN', balance: 12.2 }, { currency: 'ETC', balance: 88.17 }, { currency: 'BTN', balance: 28.17 },
  { currency: 'ETR', balance: 12.2 }, { currency: 'BEN', balance: 12.2 }, { currency: 'BTP', balance: 12.2 }, 'app', 'compile', 'fill', 'vue', 'javascript', 'application', 'fillLine', 'fillCircle', 'fillCircleMore'];

const items = objArray;

export default function getItems(text) {
  const promise = new Promise((res) => {
    setTimeout(() => {
      const coincidences = [];
      const a = new RegExp(`^${text}`, 'i');
      for (let i = 0; i < items.length; i++) {
        if (typeof items[i] === 'object') {
          if (a.test(items[i].currency)) {
            coincidences.push(items[i]);
          }
        } else if (a.test(items[i])) {
          coincidences.push(items[i]);
        }
      }
      res(coincidences);
    }, 500);
  });
  promise.abort = () => {
    // console.log('promise abort');
  };
  return promise;
}
