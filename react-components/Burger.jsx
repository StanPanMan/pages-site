import { Component } from "react";
import sx from "./Burger.module.css";
import BURGER_DATA from "/data/burger.json";


class Burger extends Component {
    constructor(props) {
        super(props);
        const initialState = {
            burger: BURGER_DATA,
        };
        this.state = initialState;
    }

    render() {
        const reducer = (accumulator, cursor, i, array) => {
            if (i === array.length - 1) {
                return [...accumulator, <Pickles key="pickles" />, cursor];
            }
            return [...accumulator, cursor];
        };

        return (
                <div 
                    className={`flex-col ${sx.burger}`}
                    style={{
                        minHeight: "5cm",
                        border: "1px solid red",
                        padding: "1rem",
                        flexGrow: 1,
                        justifyContent: "center",
                    }}
                >
                    {this.state.burger
                        .map(renderOneIngredient.bind(this)) 
                        .reduce(reducer, [])}
                </div>
        );
    }
}

function renderOneIngredient(ingredient) {
    console.log(this)
    const remove = () => {
        const mutateState = ({ burger }) => ({
            burger: burger.filter((ingr) => ingr.id !== ingredient.id),
        });
        this.setState(mutateState);
    };
    const { id: key } = ingredient;
    const props = {
        remove,
        ingredient,
    };
    return <Ingredient {...props} key={key} />;
};

/**
 * 
 * @param {Object} props
 * @param {Object} props.ingredient
 * @param {number} props.ingredient.sizeRatio 
 * @param {string[]} props.ingredient.classes
 * @param {string} props.ingredient.id
 * @param {string} props.ingredient.name
 * @param {function} props.remove
 * @returns {JSX.Element}
 */

const Ingredient = (props) => {
    const { ingredient, remove } = props;
    const { id, name, sizeRatio: flexGrow } = ingredient;
    const classes = ingredient.classes.map((c) => sx[c]).concat(sx.ingr);
    const style = { flexGrow, justifyContent: "flex-end", alignItems: "flex-end" };
    const childProps = {
        id,
        style,
        className: classes.concat("flex-row").join(" "),
    }
    const btnProps = {
        className: `${sx.remove}`,
        onClick: remove
    }
    return <div {...childProps}>
        <button {...btnProps}>Remove {name}</button>
    </div>
}

const Pickle = () => (
    <div style={{flexGrow: 1}} className={`${sx.pickle} ${sx.ingr}`}/>
);
const Pickles = () => (
    <div className={`flex-row ${sx.pickles}`}>
        {[...Array(3)].map((_, i) => (
            <Pickle key={i} />
        ))}
    </div>
);

export default Burger;

