const block1 = {
    typeBlock: 'text',
    position: {
        x: 232,
        y: 435
    },
    selected: true
}

const block2 = {
    typeBlock: 'image',
    position: {
        x: 400,
        y: 200
    },
    selected: false
}

const block3 = {
    typeBlock: 'figure',
    position: {
        x: 300,
        y: 200
    },
    selected: false
}

const text = {
    ...block1,
    content: 'hello',
    width: 400,
    height: 600,
    fontFamily: 'Roboto',
    fontWidth: 'Bold',
    fontSize: 24,
    color: 'black'
}

const figure = {
    ...block2,
    figureType: 'circle'
}

const image = {
    width: 400,
    height: 600,
    src: '/study/hello.jpg'
}

const slide1 = {
    blocks: [block1, block2, block3],
    background: "white",
    selected: true
}

const presentation = {
    presentationName: 'Презентация',
    slides: [slide1]
}

const editor = {
    presentation,
    tools: []
}

const circle = {
    ...figure,
    centerPoint: {
        x: 40,
        y: 30
    },
    radiusPoint: {
        x: 80,
        y: 40
    },
    color: 'black',
    borderColor: 'white'
};

const rectangle = {
    width: 400,
    height: 600,
    color: 'black',
    borderColor: 'white',
    mainPoint: {
        x: 80,
        y: 40
    }
}

const triangle = {
    firstPoint: {
        x: 40,
        y: 30
    },
    secondPoint: {
        x: 80,
        y: 40
    },
    thirdPoint: {
        x: 40,
        y: 30
    } 
}