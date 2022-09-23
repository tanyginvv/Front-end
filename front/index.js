const presentation = {
    editor,
    title,
    slides: [slide],
    speakerIsNotes,
}

const editor = {
    tools: [tool],
}

const slide = {
    background,
    blocks: [block]
}

const speakerIsNotes = {
    text,
}

const block = {
    type,     // Text | Image | Figure
    position,
    dimensions,
}

const dimensions = {
    width,
    height,
}

const text = {
    string,
    dimensions,
    font,
    color,
}

const image = {
    dimensions,
    src,
}

const figures = {
    figureType, // Rectangle | Circle | Triangle
    color,
    borderColor,
}