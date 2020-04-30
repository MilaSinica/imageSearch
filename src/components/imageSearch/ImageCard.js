import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spans: 0
        }
        this.imageRef = React.createRef();
    }
    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        //img height / row height for css grid system (in our css file) + 1 (to round to the next heighest road)
        const spans =  Math.ceil(height / 10) + 1;
        this.setState({spans}); //if key and value are the same in ES2015 we can siply use spans instead of spans: spans
    }
    render() {
        const {description, urls} = this.props.image;
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} 
                    alt={description} 
                    src={urls.regular}
            />
            </div>
        )
    }

};

export default ImageCard;