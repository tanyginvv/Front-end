type block = {
    id: string;
    typeBlock: text | image | figure;
    content: string;
    width: number;
    height: number;
    position: {
        x: number;
        y: number;
    }
}

type text = {
    fontFamily: string;
    fontWidth: string;
    fontSize: number;
    color: string;
}

type image = {
    src: string;
}

type figure = {
    figureType: rectangle | circle | triangle;
}

type slide = {
    id: string;
    blocks: block[];
    background: backgroundColor | backgroundImage;
}

type backgroundColor = {
    color: string;
}

type backgroundImage = {
    src: string;
}

type presentation = {
    presentationName: string;
    selectedSlidesIds: [];                    //Показывается последний элемент массива
    selectedObjectsIds: [];
    slides: slide[];
}

type rectangle = {
    color: string;
    borderColor: string;
    mainPoint: {
        x: number;
        y: number;
    }
}

type circle = {
    centerPoint: {
        x: number;
        y: number;
    };
    radius: number;
    color: string;
    borderColor: string;
}

type triangle = {
    mainPoin: {
        x: number;
        y: number;
    }
}

type editor = {
    presentation: presentation;
}