//functions

function createPresentation(): Presentation {
    return {
        presentationName: 'Новая презентация',
        slides: [],
        selectedSlides: [],
        slideSize: {
            width:800,
            height:600
        }
    };
}
function showPresentation(presentation:Presentation): Presentation{
    return presentation;
}
function changePresentationName(presentation: Presentation, newName: string): Presentation {
    return {
        ...presentation,
        presentationName:newName
    }
}

function savePresentation(presentation:Presentation): Presentation{
    return presentation;
}

//slide
function createSlide(presentation: Presentation, newBackground: Background): Presentation {
    const newSlide: Slide = {
        slideId: presentation.slides.length + 1,
        blocks: [],
        selectedBlocks: [],
        background: newBackground , //поменять на константное значение
        isSelectedSlide: false
    };
    const newSlides = [...presentation.slides, newSlide];
    return {
        ...presentation,
        slides: newSlides
    };
}
  
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

function editSlideBackground(presentation: Presentation, slideId: number, newBackground: Background): Presentation {
    const slide = presentation.slides[slideId]
    const newSlide = {
        ...slide,
        background:newBackground,
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

function selectSlide(presentation: Presentation, slideId: number, newSelect: boolean): Presentation {
    const slide = presentation.slides[slideId]
    const newSlide = {
        ...slide,
        isSelectedSlide: newSelect,
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
//block
function createBlock(presentation: Presentation, slideId: number, contentType: ContentType): Presentation {
    const newBlock = {
        contentType: contentType,
        blockId: presentation.slides[slideId].blocks.length++,
        position: {
            x: 1,
            y: 1
        },
        size :{
            width: 50,
            height: 50
        },
        isSelectedBlock: false
    }
    const newBlocks = [...presentation.slides[slideId].blocks, newBlock];
    const newSlide = {
        ...presentation.slides[slideId],
        block: newBlock
    }
    return {
        ...presentation,
        slides: presentation.slides.map(( currentSlide, index) => {
            return (index == slideId) ? newSlide : currentSlide;
        })
    };
}
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

function editBlockSize(presentation: Presentation, slideId: number, blockId: number, newSize: Size): Presentation {
    const slide = presentation.slides[slideId];
    const block = slide.blocks[blockId];
    const newBlock = {
        ...block,
        size : newSize
    }
    const newSlide = {
        ...slide,
        blocks: slide.blocks.map(( currentBlock, index) => {
            return (index == blockId) ? newBlock : currentBlock;
        })};
    return {
        ...presentation,
        slides: presentation.slides.map(( currentSlide, index) => {
            return (index == slideId) ? newSlide : currentSlide;
        })
    };
}
function selectBlock(presentation: Presentation, slideId: number, blockId: number, newSelect: boolean): Presentation {
    const slide = presentation.slides[slideId];
    const block = slide.blocks[blockId];
    const newBlock = {
        ...block,
        isSelectedBlock: newSelect
    }
    const newSlide = {
        ...slide,
        blocks: slide.blocks.map(( currentBlock, index) => {
            return (index == blockId) ? newBlock : currentBlock;
        })};
    return {
        ...presentation,
        slides: presentation.slides.map(( currentSlide, index) => {
            return (index == slideId) ? newSlide : currentSlide;
        })
    };
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
 //chars
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

function editCharsFontFamily(presentation: Presentation, slideId: number, blockId: number, newFontFamily: string): Presentation {
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

