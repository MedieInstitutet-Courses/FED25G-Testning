import { it, describe, expect, vi } from 'vitest';
import { Window } from 'happy-dom';
import { createCard, createHeader, createImage, createSpan } from './dom';
const window = new Window();
const document = window.document;

vi.stubGlobal('document', document);

describe('Document Object Model functions', () => {
  it('should create a html card of nodetype "section"', () => {
    expect(createCard().nodeName).toBe('SECTION');
  });

  it('should create an image element with an id', () => {
    const image = createImage('test.jpg', 1);

    expect(image).toBeDefined();
    expect(image.getAttribute('id')).toBe('1');
    expect(image.getAttribute('src')).toBe('test.jpg');
  });

  it('should create a span element with class', () => {
    const span = createSpan('Span text', 'classname');

    expect(span).toBeDefined();
    expect(span.innerText).toMatch(/span text/i);
    expect(span.getAttribute('class')).toBe('classname');
  });

  it('should create a header element', () => {
    const header = createHeader('Titel', 'h1', 'classname');

    expect(header).toBeDefined();
    expect(header.nodeName).toMatch(/h1/i);
    expect(header.innerText).toMatch(/titel/i);
    expect(header.getAttribute('class')).toBe('classname');
  });
});
