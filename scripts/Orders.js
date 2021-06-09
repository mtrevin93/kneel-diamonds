import { getOrders, getStyles, getSizes, getMetals, getOrderBuilder } from "./database.js"

export const Orders = () => {

    let html = "<ul>"
    const htmlArray = []
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
const orders = getOrders()
const metals = getMetals()
const styles = getStyles()
const sizes = getSizes()

for (const order of orders) {
    const foundStylePrice = styles.find((style) => style.id === order.styleId).price
    const foundMetalPrice = metals.find((metal) => metal.id === order.metalId).price
    const foundSizePrice = sizes.find((size) => size.id === order.sizeId).price

    let totalCost = foundMetalPrice + foundStylePrice + foundSizePrice
    let costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD" })


        html += `<li>
        <name="order"/> Order #${order.id} cost ${costString}
        </li>`




}
html += "</ul>"
htmlArray.push(html)
htmlArray.join("")
return htmlArray
}