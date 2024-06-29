function getElementWidth(content, padding, border) {
    const contentWidth = parseFloat(content)
    const paddingWidth = parseFloat(padding)
    const borderWidth = parseFloat(border)

    const totalWidth = contentWidth + paddingWidth + borderWidth
    return totalWidth
}

console.log(getElementWidth("50px", "8px", "4px")); // 62
console.log(getElementWidth("60px", "12px", "8.5px")); // 80.5
console.log(getElementWidth("200px", "0px", "0px")); // 200
