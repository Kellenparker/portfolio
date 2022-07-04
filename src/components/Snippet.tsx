import React from "react";
import "./styles/Snippet.css";

type myProps = {};
type myState = {
    currentCode: number;
    change: boolean;
    cursor: boolean;
};

class Snippet extends React.Component<myProps, myState> {
    code = ['<div id="root">', 'getCode = () =>' , 'obj[i]->getCode()'];
    changeInterval: NodeJS.Timer | undefined;
    cursorInterval: NodeJS.Timer | undefined;
    constructor(props: myProps | Readonly<myProps>) {
        super(props);
        this.state = {
            currentCode: 0,
            change: false,
            cursor: true,
        };
    }
    componentDidMount() {
        this.changeInterval = setInterval(() => this.changeCode(), 7000);
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
        }, 500);
    }
    changeCode() {
        clearInterval(this.cursorInterval);
        this.setState({
            change: true,
            cursor: false
        });

        if (this.state.currentCode + 1 >= this.code.length) var next = 0;
        else var next = this.state.currentCode + 1;

        setTimeout(() => {
            this.setState({
                currentCode: next,
                change: false,
            });
            this.setCursor();
        }, 2000);
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
                    className={"main" + " bottom "}
                    style={{ animationName: this.state.change ? "animbot" : "", animationDuration: "2s" }}
                >
                    <code className="string">
                        &nbsp;{this.code[this.state.currentCode >= this.code.length - 1 ? 0 : this.state.currentCode + 1]}
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
