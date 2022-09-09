import React from "react";
import "./styles/Snippet.css";

type myProps = {};
type myState = {
    currentCode: number;
    change: boolean;
    cursor: boolean;
};

const changeTime = 7000;
const cursorTime = 750;
const changeDuration = 2000;

class Snippet extends React.Component<myProps, myState> {
    code = ['<div id="root">', 
            'getWidth = () =>', 
            'obj[i]->getSize()', 
            'type myProps = {}'];
    changeInterval: NodeJS.Timer | undefined;
    cursorInterval: NodeJS.Timer | undefined;
    constructor(props: myProps | Readonly<myProps>) {
        super(props);
        this.state = {
            currentCode: 0,
            change: false,
            cursor: false,
        };
    }
    componentDidMount() {
        this.changeInterval = setInterval(() => this.changeCode(), changeTime);
        this.setCursor();
    }
    componentWillUnmount() {
        clearInterval(this.changeInterval);
        clearInterval(this.cursorInterval);
    }
    setCursor() {
        this.cursorInterval = setInterval(() => {
            this.setState({
                cursor: !this.state.cursor,
            });
        }, cursorTime);
    }
    changeCode() {
        this.setState({
            change: true,
        });

        var next: number;
        if (this.state.currentCode + 1 >= this.code.length) next = 0;
        else next = this.state.currentCode + 1;

        setTimeout(() => {
            this.setState({
                currentCode: next,
                change: false,
            });
        }, changeDuration);
    }
    render() {
        return (
            <div className="snippet">
                <div
                    className={"main"}
                    style={{ animationName: this.state.change ? "anim" : "", animationDuration: "2s" }}
                >
                    <code className="string">&nbsp;{this.code[this.state.currentCode]}</code>
                    <code className="string" style={{ opacity: !this.state.cursor ? "0" : "1" }}>
                        |
                    </code>
                </div>

                <div
                    className={"main bottom"}
                    style={{ animationName: this.state.change ? "animbot" : "", animationDuration: "2s" }}
                >
                    <code className="string">
                        &nbsp;
                        {this.code[this.state.currentCode >= this.code.length - 1 ? 0 : this.state.currentCode + 1]}
                    </code>
                    <code className="string" style={{ opacity: !this.state.cursor ? "0" : "1" }}>
                        |
                    </code>
                </div>
            </div>
        );
    }
}

export default Snippet;
