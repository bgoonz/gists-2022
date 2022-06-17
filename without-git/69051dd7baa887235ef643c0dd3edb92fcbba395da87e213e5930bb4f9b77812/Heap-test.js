/**
* @emails zef@fb.com
*/

'use strict';

jest
  .unmock('Heap');

let Heap = require('Heap');

describe('Heap', function() {
  let heap;

  function expectHeap(heap) {
    let size = heap._items.length;

    expect(heap.size()).toBe(size);

    for (let index = 0; index < size; index++) {
      expect(heap._items[index]).toBeDefined();

      let leftChildIndex = 2 * (index + 1) - 1;
      if (leftChildIndex < size) {
        expect(
          heap._comparator(heap._items[index], heap._items[leftChildIndex])
        )
        .toBeTruthy();
      }

      let rightChildIndex = 2 * (index + 1);
      if (rightChildIndex < size) {
        expect(
          heap._comparator(heap._items[index], heap._items[rightChildIndex])
        )
        .toBeTruthy();
      }
    }
  }

  beforeEach(function() {
    jest.resetModuleRegistry();

    heap = new Heap([7, 1, 6, 2, 5, 3, 4]);
    expectHeap(heap);
  });

  it('heapify should work', function() {
    expect(heap).toBeDefined();
  });

  it('test the default min heap', function() {
    for (let ii = 1; ii <= 7; ii++) {
      expect(heap.empty()).toBeFalsy();
      expect(heap.size()).toBe(8 - ii);

      let peek = heap.peek();
      expect(peek).toBe(ii);

      let pop = heap.pop();
      expect(pop).toBe(ii);

      expectHeap(heap);
    }

    expect(heap.empty()).toBeTruthy();
    expect(heap.size()).toBe(0);
  });

  it('test with custom comparator', function() {
    let comparator = function(a, b) {
      return a > b;
    };

    heap = new Heap([1, 2, 3, 4, 5, 6, 7], comparator);
    expectHeap(heap);

    for (let ii = 7; ii >= 1; ii--) {
      expect(heap.empty()).toBeFalsy();
      expect(heap.size()).toBe(ii);

      let peek = heap.peek();
      expect(peek).toBe(ii);

      let pop = heap.pop();
      expect(pop).toBe(ii);

      expectHeap(heap);
    }

    expect(heap.empty()).toBeTruthy();
    expect(heap.size()).toBe(0);
  });

  it('test empty pop', function() {
    heap = new Heap();
    expectHeap(heap);

    expect(heap.peek()).not.toBeDefined();
    expect(heap.pop()).not.toBeDefined();

    expectHeap(heap);

    expect(heap.empty()).toBeTruthy();
    expect(heap.size()).toBe(0);
  });

  it('push should work too', function() {
    let items = [7, 1, 6, 2, 5, 3, 4];
    let min = 8;

    heap = new Heap();
    expectHeap(heap);

    expect(heap.empty()).toBeTruthy();
    expect(heap.size()).toBe(0);

    for (let ii = 0; ii < items.length; ii++) {
      let item = items[ii];
      min = Math.min(min, item);

      heap.push(item);
      expectHeap(heap);

      let peek = heap.peek();
      expect(peek).toBe(min);

      expect(heap.empty()).toBeFalsy();
      expect(heap.size()).toBe(ii + 1);
    }
  });
});
