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
            image: this.coin[0]
        }
        this.flipCoin = this.flipCoin.bind(this)
    }

    flipCoin(){
        console.log('flip coin ran!');
        let coinSide = Math.round(Math.random()); // 0,1
        this.setState({
            image: this.coin[coinSide]
        })
        // NEVER DO THIS...
        // this.state.image = this.coin[coinSide];
    }

    // local class method
    // EVERY... REPEAT... EVERY class component, MUST have a render.
    render(){

        // ANY TIME state changes. render method runs

        // it is my job to return a single DOM element
        // whether you like it or not, render will fun after the constructor
        // React events are camelCase and attached to the element
        // You don't invoke them, just pass them
        return(
            <div className="coin-flip">
                <button onClick={this.flipCoin}>Flip Coin</button>
                <img src={this.state.image} />
            </div>
        )
    }
}