import React from 'react';

import Header from './components/Header'
import Chirp from './components/Chirp'

let chirpIDCounter = 4

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            chirpText: "",
            chirps: [
                {
                    image: "https://ami.animecharactersdatabase.com/uploads/chars/5688-1280951159.jpg",
                    username: "Oroku",
                    chirpText: "But the true art of transforming can only be practiced by foxes, raccoons and a few cats.",
                    chirpID: 1
                },
                {
                    image: "https://m.media-amazon.com/images/S/aplus-media/vc/0961ae9a-57db-44b4-8e44-94c87bff35dd.__CR0,0,1748,1748_PT0_SX220_V1___.jpg",
                    username: "Shoukichi",
                    chirpText: "What if the humans leveled the entire forest? Then where are we gonna go?",
                    chirpID: 2
                },
                {
                    image: "data:image/jpeg;base64,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",
                    username: "Gonta",
                    chirpText: "The world is crawling with humans! Like roaches! We need to destroy as many as we can!!",
                    chirpID: 3
                }
            ]
        }
    }

    submit(e) {
        e.preventDefault();
        let newChirp = {
            image: "https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/egg-3442-e1f6463624338504cd021bf23aef8441@1x.jpg",
            username: this.state.username,
            chirpText: this.state.chirpText,
            chirpID: chirpIDCounter
        }

        this.setState({ username: "", chirpText: "", chirps: [...this.state.chirps, newChirp] })
        chirpIDCounter += 1
    }

    render() {
        return (
            <>
                <Header></Header>

                <div className="row">
                    <div className="col-md-4">
                        <div id="form-container">
                            <form id="chirp-form" action="">
                                <h3 id="form-title">
                                    New Chirp
                                </h3>
                                <input id="username-input" value={this.state.username} placeholder="Username" onChange={e => { this.setState({ username: e.target.value }) }} />
                                <textarea id="chirp-textarea" value={this.state.chirpText} placeholder="What's on your mind?" rows="5" onChange={e => { this.setState({ chirpText: e.target.value }) }}></textarea>
                                <button id="chirp-button" onClick={e => { this.submit(e) }}>
                                    Chirp It
                                </button>
                            </form>
                        </div>
                    </div>

                    <div id="timeline" className="col-md-8">
                        {this.state.chirps.map(chirp => <Chirp chirp={chirp} key={`chirp-${chirp.chirpID}`} />)}
                    </div>
                </div>
            </>
        )
    }
}

export default App;