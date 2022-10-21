const block1 = {
    id: '1',
    typeBlock: 'text',
    position: {
        x: 232,
        y: 435
    },
    width: 400,
    height: 600,
    selected: true
}

const block2 = {
    id: '2',
    typeBlock: 'image',
    position: {
        x: 400,
        y: 200
    },
    selected: false
}

const block3 = {
    id: '3',
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
    src: '/study/hello.jpg'
}

const slide1 = {
    id: '1',
    blocks: [block1, block2, block3],
    background: "white",
    // selected: true
}

const presentation = {
    presentationName: 'Презентация',
    selectedSlidesIds: ['1'],
    selectedObjectsIds: ['1', '2'],
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
    radius: 50,
    color: 'black',
    borderColor: 'white'
}

const rectangle = {
    color: 'black',
    borderColor: 'white',
    mainPoint: {
        x: 80,
        y: 40
    }
}

const triangle = {
    mainPoin: {
        x: 80,
        y: 90
    }
}




function changePresentationName(editor) {
    return presentation;
}

function deleleSlides(editor) {
    return 0;
}

//block
function addBlockText(editor){
    return slide;
}
function addBlockImage(editor){
    return slide;
}
function addBlockFigure(editor){
    return slide;
}
function deleteBlock(editor){
    return 0;
}
function moveBlock(block, editor){
    return block;
}

//chars
function editTextSize(editor){
    return text;
}
function editTextColor(editor){
    return text;
}
function editTextContent(editor){
    return text;
}
function editTextFontFamily(editor, fontFamily){
    return text;
}
function editTextFontSize(editor, fontSize){
    return text;
}
function editTextFontWidth(editor, fontWidth){
    return text;
}

//image
function createImage(src, editor){
    return image;
}
function editImageSize(image, editor){
    return image;
}

//circle
function createCircle(editor){
    return circle;
}
function moveCircleCenter(editor, centerPoint){
    return circle;
}
function editCircleRadius(editor, radius){
    return circle;
}
function editCircleColor(editor, color){
    return circle;
}
function editCircleBorderColor(editor, borderColor){
    return circle;
}

//rectangle
function createRectangle(editor){
    return rectangle;
}
function editRectangleColor(editor, color){
    return rectangle;
}
function editRectangleSize(editor, size){
    return rectangle;
}
function editRectangleBorderColor(editor, borderColor){
    return rectangle;
} 

//triangle
function createTriangle(editor){
    return triangle;
}
function moveTriangle(editor, centerPoint){
    return triangle;
}
function editTriangleColor(editor, color){
    return triangle;
}

