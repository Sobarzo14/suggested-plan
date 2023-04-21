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

    render() {
        return html`
            <div class="content">
                ${this.videos.map((video) => html`
                    <div class="content-item">
                        <div class="content-title">
                            ${console.log(video)}
                            ${video["Video"].Title}
                        </div>
                        <div class="duration">
                            ${video["Duration"]}
                        </div>
                    </div>
                `)}
                ${this.readings.map((reading) => html`
                    <div class="content-item">
                        <div class="content-title">
                            ${reading["Title"]}
                        </div>  
                        <div class="duration">
                            ${reading["Duration"]}
                        </div>
                    </div>
                `)}
                ${this.exercises.map((exercise) => html`
                    <div class="content-item">
                        <div class="content-title">
                            ${exercise["Title"]}
                        </div>
                        <div class="duration">
                            ${exercise["Duration"]}
                        </div>
                    </div>
                `)}
            <\div>
        `;
    }
}

customElements.define('learning-content', LearningContent);