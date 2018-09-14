import React from 'react'
import OpenSeadragon from 'openseadragon'
import './Dragon.css'


const loadImage = (src) => new Promise(function(resolve, reject) {
    var img = document.createElement('img')
    img.addEventListener('load', function(){  resolve(img) })
    img.addEventListener('error', function(err){ reject(404) })
    img.src = src;
});

class Dragon extends React.Component {
    
    constructor(props) {
        super(props)
    }
    
    render() {
        let self = this;
        let { id } = this.props
        return (
            <div className="ocd-div" ref={node => {this.el = node;}}>
                <div className="navigator-wrapper c-shadow">
                    <div id="navigator"></div>
                </div>
                <div className="openseadragon" id={id}></div>
                <ul className="ocd-toolbar">
                    <li><a id="zoom-in">+<i className="fa fa-plus"></i></a></li>
                    <li><a id="home">&#8962;<i className="fa fa-circle"></i></a></li>
                    <li><a id="zoom-out">-<i className="fa fa-minus"></i></a></li>
                    <li><a id="full-page">[  ]<i className="fa fa-cog"></i></a></li>
                </ul>
            </div>
        )
    }
    
    initSeaDragon(){
        let self = this
        let { id, image, type } = this.props
        loadImage(image).then(data => {
            self.viewer =  OpenSeadragon({
                id: id,
                visibilityRatio: 1.0,
                constrainDuringPan: false,
                defaultZoomLevel: 2,
                minZoomLevel: 1,
                maxZoomLevel: 10,
                zoomInButton: 'zoom-in',
                zoomOutButton: 'zoom-out',
                homeButton: 'home',
                fullPageButton: 'full-page',
                nextButton: 'next',
                previousButton: 'previous',
                showNavigator: true,
                navigatorId: 'navigator',
                tileSources: {
                    type:type,
                    levels:[ { url: image, height:data.naturalHeight, width: data.naturalWidth } ]
                }
            })
            
        });
    }
    
    componentDidMount(){
        this.initSeaDragon()
    }
    shouldComponentUpdate(nextProps, nextState){
        return false
    }
}

Dragon.defaultProps = { id: 'ocd-viewer',  type:'legacy-image-pyramid' }

export default Dragon

