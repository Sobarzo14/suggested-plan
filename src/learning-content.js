import { LitElement, html, css } from 'lit';

class LearningContent extends LitElement {
    static properties = {
            videos: { type: Array },
            readings: { type: Array },
            exercises: { type: Array },
        }

    static styles = css`
        * {
            color: blue,
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .duration {
            display: inline;
            padding: 8px;
        }
        .videos, .readings, .exercises {
            display: flex;
            flex-direction: column;
        }
        .content-item {
            padding: 8px;
            display: flex;
            flex-direction: row;
        }
    `;

    constructor() {
        super();
        this.videos = [];
        this.readings = [];
        this.exercises = [];
    }

    showContent() {
        console.log(this.videos);
    }

    render() {
        return html`
            <div class="content">
                ${this.videos.map((video) => html`
                    <div class="content-item">
                        <div class="content-title">
                            ${console.log(video)}
                            ${video.title}
                        </div>
                        <div class="duration">
                            ${video.duration}
                        </div>
                    </div>
                `)}
                ${this.readings.map((reading) => html`
                    <div class="content-item">
                        <div class="content-title">
                            ${reading.title}
                        </div>
                        <div class="duration">
                            ${reading.duration}
                        </div>  
                    </div>
                `)}
                ${this.exercises.map((exercise) => html`
                    <div class="content-item">
                        <div class="content-title">
                            ${exercise.title}
                        </div>
                        <div class="duration">
                            ${exercise.duration}
                        </div>
                    </div>
                `)}
            </div>
        `;
    }
}

customElements.define('learning-content', LearningContent);