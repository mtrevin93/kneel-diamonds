
import { DiamondSizes } from "./DiamondSizes.js"
import { JewelryStyles } from "./JewelryStyles.js"
import { Metals } from "./Metals.js"
import { Orders } from "./Orders.js"
import { getMetals, getSizes, getStyles } from "./database.js"
import { addCustomOrder } from "./database.js"
import {getOrderBuilder} from "./database.js"

const orderBuilder = getOrderBuilder()
const styles = getStyles()
const sizes = getSizes()
const metals = getMetals()

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {

            addCustomOrder()

        }
    }
)

export const KneelDiamonds = () => {
    return `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="options__metals options">
                <h2>Metals</h2>
                <p>${Metals()}</p>
            </section>
            <section class="options__sizes options">
                <h2>Sizes</h2>
                <p>${DiamondSizes()}</p>
            </section>
            <section class="options__styles options">
                <h2>Styles</h2>
                <p>${JewelryStyles()}</p>
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            <p>${Orders()}</p>
        </article>
    `
}

