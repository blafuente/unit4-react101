class CoinFlip extends React.Component{
    // the first thing we do in ANY class...
    constructor(props){
        // this is a child class. It's a child of React.Component
        // in order to get the cool stuff that is React.Component....
        super(props)
        // React doesn't care about heads or tails.
        // like, at all
        this.heads = "buffalo-nickel-heads.jpg"
        this.tails = "buffalo-nickel-tails.png"
        this.coin = [
            this.heads,
            this.tails
        ]
        // State is special. React cares about State. A LOT 
        this.state = {
            image: this.coin[0],
            image1: this.coin[1]
        }
    }

    // local class method
    // EVERY... REPEAT... EVERY class component, MUST have a render.
    render(){
        // it is my job to return a single DOM element
        // whether you like it or not, render will fun after the constructor
        return(
            <div className="coin-flip">
                <img src={this.state.image} />
                <img src={this.state.image1} />
            </div>
        )
    }
}