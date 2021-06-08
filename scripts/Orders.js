import { getOrders, getStyles, getSizes, getMetals, getOrderBuilder } from "./database.js"

const buildOrderListItem = (order) => {
    return `<li>
        Order #${order.id} cost ${costString}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
const orders = getOrders()
const metals = getMetals()
const styles = getStyles()
const sizes = getSizes()

const foundStylePrice = styles.find((style) => style.id === orders.styleId).price
const foundMetalPrice = metals.find((metal) => metal.id === orders.metalId).price
const foundSizePrice = sizes.find((size) => size.id === orders.sizeId).price

const totalCost = foundMetalPrice + foundStylePrice + foundSizePrice

const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

