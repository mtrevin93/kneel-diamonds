import { getStyles, setStyle, getOrderBuilder } from "./database.js"

const styles = getStyles()


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            setStyle(parseInt(event.target.value))
        }
    }
)

export const JewelryStyles = () => {
    let html = "<ul>"
    const customOrder = getOrderBuilder()

    // Use .map() for converting objects to <li> elements
    const listItems = styles.map(
        style => {
        if (customOrder.styleId === style.id) {
            return `<li>
            <input type="radio" id="style" name="style" value ="${style.id}" checked></input>
            ${style.style}</li>`
        }
        else {
            return `<li> <input type="radio" name="style" value ="${style.id}"></input>${style.style} </li>`
        }
        })

    // Join all of the strings in the array into a single string
    html += listItems.join("")

    html += "</ul>"
    return html
}

