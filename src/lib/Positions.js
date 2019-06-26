export default class Positions {
  constructor(size = 1, margin = 1) {
    this._size = size;
    this._margin = margin;
    this._block = 1 / size;
    this.items = new Array(this._size + this._margin * 2).fill(0).map((item, index) => ({
      key: index - this._margin,
      position: (index - this._margin) / this._size
    }));
  }

  next() {
    this.items = this.items
      .slice(-(this._size + this._margin * 2))
      .map((item, i) => ({
        key: item.key + 1,
        position: (i - this._margin) * this._block
      }));

    return this.items;
  }

  prev() {
    this.items = this.items
      .slice(0, this._size + this._margin * 2)
      .map((item, i) => ({
        key: item.key - 1,
        position: (i - this._margin) * this._block
      }));

    return this.items;
  }

  setSize(size) {
    if (size === this._size) {
      return this.items;
    }

    this._block = 1 / size;

    this.items = this.items.map((item) => ({...item, position: item.position * (this._size / size)}));

    if (size < this._size) {
      this.items = this.items.slice(0, this.items.length - (this._size - size));
    } else {
      let from = this.items[this.items.length - 1];
      for (let i = 1; i <= size - this._size; i++) {
        this.items.push({
          key: from.key + i,
          position: from.position + this._block * i
        });
      }
    }

    this._size = size;

    return this.items;
  }

  // 0.25
  move(number) {
    if (number === 0) {
      return this.items;
    }

    this.items = this.items.map(item => ({...item, position: item.position + number}));

    const avg = this.items.reduce((a, x) => (a + x.position), 0);

    console.log(avg);

    /* if (avg === 0) {
       return this.items;
     }

     this.items = this.items.map(item => ({
       key: item.key + avg,
       position: item.position - avg * this._block
     }));*/

    return this.items;
  }

  getWidth() {
    return this._block;
  }
}