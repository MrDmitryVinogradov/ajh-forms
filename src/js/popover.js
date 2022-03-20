export default class Popover {
  constructor(buttonText, headerText, contentText) {
    this.buttonText = buttonText;
    this.headerText = headerText;
    this.contentText = contentText;
  }

  createButton() {
    const formWrapper = document.createElement('div');
    formWrapper.classList.add('form-wrapper');
    const form = document.createElement('form');
    form.classList.add('form');
    const btn = document.createElement('button');
    btn.innerText = this.buttonText;
    form.appendChild(btn);
    formWrapper.appendChild(form);
    document.querySelector('body').appendChild(formWrapper);
    this.popover = document.createElement('div');
    this.popover.classList.add('popover');
    const popoverHeader = document.createElement('div');
    popoverHeader.classList.add('popover-header');
    popoverHeader.innerText = this.headerText;
    this.popover.appendChild(popoverHeader);
    const popoverContent = document.createElement('div');
    popoverContent.classList.add('popover-content');
    popoverContent.innerText = this.contentText;
    this.popover.appendChild(popoverContent);
    btn.appendChild(this.popover);
    const triangle = document.createElement('div');
    triangle.classList.add('triangle');
    this.popover.appendChild(triangle);
    const topTriangle = document.createElement('div');
    topTriangle.classList.add('top-triangle');
    this.popover.appendChild(topTriangle);
  }

  clickOnButton() {
    const btn = document.querySelector('button');
    btn.addEventListener('click', (evt) => {
      evt.preventDefault();
      if (this.popover.classList.contains('hidden')) {
        this.popover.classList.remove('hidden');
      } else this.popover.classList.add('hidden');
    });
  }
}
