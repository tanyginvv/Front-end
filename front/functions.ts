//functions

// function createPresentation(presentation:Presentation): Presentation {
//     let newPresentation: Presentation ={
//         presentationName: "Новая презентация",                   
//         slides: [],
//         selectedSlides: []
//     };
//       return newPresentation
// } 
// function showPresentation(presentation:Presentation): Presentation{
//     return presentation;
// }
function changePresentationName(presentation: Presentation, newName: string): Presentation {
    return {
        ...presentation,
        presentationName:newName
    }
}

// //slide
// function createSlide(slide:Slide , background:BackgroundColor | BackgroundImage): Slide{
//     let newSlide: Slide = {
//         size:{
//             width:800,
//             heigth:600
//         },
//         id:0,
//         blocks: [],
//         background: background,
//         // isSelectedSlide:[]
//     }
//     return newSlide
//   }
  
// function deleteSlide(presentation: Presentation, slide: Slide): Presentation {
//     return {
//         ...presentation,
//         //
//     };
// }

function editSlideSize(presentation: Presentation, slideId: number, newSize: Size): Presentation {
    const slide = presentation.slides[slideId]
    const newSlide = {
        ...slide,
        slideSize:newSize,
    }
    return {
        ...presentation,
        slides: presentation.slides.map(( currentSlide, id) => {
            if (id == slideId)
            {
                return newSlide
            }
            else
            {
                return currentSlide
            }
        })
    }
}
// //block
// function createBlock(contentType: Chars | Image | Figure): Block{
//     let newBlock: Block = {
//         id:0,
//         position : {
//             x:0,
//             y:0
//         },
//         width: 800,
//         height:400,
//         contentType: contentType,
//         selectedObjectsId:[],
//     }
//     return newBlock
//   }
// function deleteBlock(slide: Slide,block: Block): Slide {
//     return {
//         ...slide,
//         //
// };
// }

function moveBlock(presentation: Presentation, slideId: number, blockId: number, newPosition: Position): Presentation {
    const slide = presentation.slides[slideId]
    const block = slide.blocks[blockId]
    const newBlock = {
        ...block,
        position: newPosition
    }
    const newSlide = {
        ...slide,
        blocks: slide.blocks.map(( currentBlock, id) => {
            if (id == blockId)
            {
                return newBlock
            }
            else
            {
                return currentBlock
            }
        // Возвращает элемент для new_array
    })}
    return {
        ...presentation,
        slides: presentation.slides.map(( currentSlide, id) => {
            if (id == slideId)
            {
                return newSlide
            }
            else
            {
                return currentSlide
            }
        })
    }
}
//figure
function editFigureColor(presentation: Presentation, slideId: number, blockId: number, newColor: string): Presentation {
    const slide = presentation.slides[slideId]
    const block = slide.blocks[blockId]
    const newBlock = {
        ...block,
        color: newColor
    }
    const newSlide = {
        ...slide,
        blocks: slide.blocks.map(( currentBlock, id) => {
            if (id == blockId)
            {
                return newBlock
            }
            else
            {
                return currentBlock
            }
        // Возвращает элемент для new_array
    })}
    return {
        ...presentation,
        slides: presentation.slides.map(( currentSlide, id) => {
            if (id == slideId)
            {
                return newSlide
            }
            else
            {
                return currentSlide
            }
        })
    }
}
function editFigureBorderColor(presentation: Presentation, slideId: number, blockId: number, newBorderColor: string): Presentation {
    const slide = presentation.slides[slideId]
    const block = slide.blocks[blockId]
    const newBlock = {
        ...block,
        borderColor: newBorderColor
    }
    const newSlide = {
        ...slide,
        blocks: slide.blocks.map(( currentBlock, id) => {
            if (id == blockId)
            {
                return newBlock
            }
            else
            {
                return currentBlock
            }
        // Возвращает элемент для new_array
    })}
    return {
        ...presentation,
        slides: presentation.slides.map(( currentSlide, id) => {
            if (id == slideId)
            {
                return newSlide
            }
            else
            {
                return currentSlide
            }
        })
    }
}
// //chars
function editCharsColor(presentation: Presentation, slideId: number, blockId: number, newColor: string): Presentation {
    const slide = presentation.slides[slideId]
    const block = slide.blocks[blockId]
    const newBlock = {
        ...block,
        color: newColor
    }
    const newSlide = {
        ...slide,
        blocks: slide.blocks.map(( currentBlock, id) => {
            if (id == blockId)
            {
                return newBlock
            }
            else
            {
                return currentBlock
            }
        // Возвращает элемент для new_array
    })}
    return {
        ...presentation,
        slides: presentation.slides.map(( currentSlide, id) => {
            if (id == slideId)
            {
                return newSlide
            }
            else
            {
                return currentSlide
            }
        })
    }
}

function editFontFamily(presentation: Presentation, slideId: number, blockId: number, newFontFamily: string): Presentation {
    const slide = presentation.slides[slideId]
    const block = slide.blocks[blockId]
    const newBlock = {
        ...block,
        fontFamily: newFontFamily
    }
    const newSlide = {
        ...slide,
        blocks: slide.blocks.map(( currentBlock, id) => {
            if (id == blockId)
            {
                return newBlock
            }
            else
            {
                return currentBlock
            }
        // Возвращает элемент для new_array
    })}
    return {
        ...presentation,
        slides: presentation.slides.map(( currentSlide, id) => {
            if (id == slideId)
            {
                return newSlide
            }
            else
            {
                return currentSlide
            }
        })
    }
}
function editCharsContent(presentation: Presentation, slideId: number, blockId: number, newContent: string): Presentation {
    const slide = presentation.slides[slideId]
    const block = slide.blocks[blockId]
    const newBlock = {
        ...block,
        content: newContent
    }
    const newSlide = {
        ...slide,
        blockList: slide.blocks.map(( currentBlock, id) => {
            if (id == blockId)
            {
                return newBlock
            }
            else
            {
                return currentBlock
            }
        // Возвращает элемент для new_array
    })}
    return {
        ...presentation,
        slides: presentation.slides.map(( currentSlide, id) => {
            if (id == slideId)
            {
                return newSlide
            }
            else
            {
                return currentSlide
            }
        })
    }
}
function editCharsFontSize(presentation: Presentation, slideId: number, blockId: number, newFontSize: string): Presentation {
    const slide = presentation.slides[slideId]
    const block = slide.blocks[blockId]
    const newBlock = {
        ...block,
        fontSize: newFontSize
    }
    const newSlide = {
        ...slide,
        blocks: slide.blocks.map(( currentBlock, id) => {
            if (id == blockId)
            {
                return newBlock
            }
            else
            {
                return currentBlock
            }
        // Возвращает элемент для new_array
    })}
    return {
        ...presentation,
        slides: presentation.slides.map(( currentSlide, id) => {
            if (id == slideId)
            {
                return newSlide
            }
            else
            {
                return currentSlide
            }
        })
    }
}

function editCharsFontBold(presentation: Presentation, slideId: number, blockId: number, newFontBold: boolean): Presentation {
    const slide = presentation.slides[slideId]
    const block = slide.blocks[blockId]
    const newBlock = {
        ...block,
        fontBold: newFontBold
    }
    const newSlide = {
        ...slide,
        blocks: slide.blocks.map(( currentBlock, id) => {
            if (id == blockId)
            {
                return newBlock
            }
            else
            {
                return currentBlock
            }
        // Возвращает элемент для new_array
    })}
    return {
        ...presentation,
        slides: presentation.slides.map(( currentSlide, id) => {
            if (id == slideId)
            {
                return newSlide
            }
            else
            {
                return currentSlide
            }
        })
    }
}
function editCharsFontItalic(presentation: Presentation, slideId: number, blockId: number, newFontItalic: boolean): Presentation {
    const slide = presentation.slides[slideId]
    const block = slide.blocks[blockId]
    const newBlock = {
        ...block,
        fontItalic: newFontItalic
    }
    const newSlide = {
        ...slide,
        blocks: slide.blocks.map(( currentBlock, id) => {
            if (id == blockId)
            {
                return newBlock
            }
            else
            {
                return currentBlock
            }
        // Возвращает элемент для new_array
    })}
    return {
        ...presentation,
        slides: presentation.slides.map(( currentSlide, id) => {
            if (id == slideId)
            {
                return newSlide
            }
            else
            {
                return currentSlide
            }
        })
    }
}

// //image
// function createImage(path: string):Image{
//     let newImage: Image = {
//         size: {
//             width: 100,
//             heigth: 100
//         },
//         src: path
//     };
//     return newImage;
// }
// //circle
// function createCircle(block: Figure, circle: Figure ):Circle{
//     let newCircle: Circle = {
//         mainPoint :{
//             x: 100,
//             y: 100
//         },
//         color: "black",
//         borderColor: "black",
//         radius:10
//     };
//     return newCircle
// }

// //rectangle
// function createRectangle(block:Figure, rectangle: Figure):Rectangle {
//     let newRectangle: Rectangle = {
//         mainPoint :{
//             x: 100,
//             y: 100
//         },
//         color: "black",
//         borderColor: "black"
//     };
//     return newRectangle
// }

// //triangle
// function createTriangle( block:Figure, triangle: Figure ):Triangle{
//     let newTriangle: Triangle = {
//         mainPoint :{
//             x: 100,
//             y: 100
//         },
//         color: "black",
//         borderColor: "black"
//     };
//     return newTriangle
// }