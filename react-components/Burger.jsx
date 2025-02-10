import { Component } from "react";
import sx from "./Burger.module.css";


class Burger extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div 
                    className="flex-col"
                    style={{
                        minHeight: "5cm",
                        border: "1px solid red",
                        padding: "1rem",
                        flexGrow: 1,
                        justifyContent: "center",
                    }}
                >
                    <Ingredient sizeRatio={12} classes={[sx.top, sx.bun, sx.ingr]} />
                    <Ingredient sizeRatio={1} classes={[sx.lettuce, sx.ingr]} />
                    <Ingredient sizeRatio={2} classes={[sx.tomato, sx.ingr]} />
                    <Ingredient sizeRatio={1} classes={[sx.cheese, sx.ingr]} />
                    <Ingredient sizeRatio={4} classes={[sx.meat, sx.ingr]} />
                    <Pickles />
                    <Ingredient sizeRatio={6} classes={[sx.bun, sx.ingr]} />
                </div>
        );
    }
}

/**
 * 
 * @param {Object} props
 * @param {number} props.sizeRatio 
 * @param {string[]} props.classes
 * @returns {JSX.Element}
 */
const Ingredient = (props) => {
    const { sizeRatio: flexGrow, classes } = props;
    const style = { flexGrow };
    const childProps = {
        style,
        className: classes.join(" "),
    }
    return <div {...childProps}/>
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

