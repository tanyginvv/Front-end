type Presentation = {
    presentationName: string,
    slides: Slide[],
    selectedSlides: Slide[],
    slideSize: Size       
}

type Block = {
    position: Position,
    blockId: number,
    contentType: Chars | Image | Figure,
    size: Size,
    isSelectedBlock: boolean
}

type Position = {
    x: number;
    y: number;
}

type Size = {
    width: number,
    heigth: number
}

type Chars = {
    color: string,
    content: string,
    fontSize: number,
    fontFamily:string,
    fontBold: boolean,
    fontItalic: boolean
} 

type Image = {
    src: string;
}

type Figure = {
    figureType: Rectangle | Circle | Triangle,
    color: string;
    borderColor: string;
}

type Slide = {
    slideId: number;
    blocks: Block[];
    background: BackgroundColor | BackgroundImage;
    isSelectedSlide: boolean;
}

type BackgroundColor = {
    color: string;
}

type BackgroundImage = {
    src: string;
}

type Rectangle = {
    color: string,
    borderColor: string,
}

type Circle = {
    color: string,
    borderColor: string
}

type Triangle = {
    color: string,
    borderColor: string
}

