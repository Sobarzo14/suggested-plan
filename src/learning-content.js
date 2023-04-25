import { LitElement, html, css } from 'lit';

class LearningContent extends LitElement {
    static properties = {
            videos: { type: Array },
            readings: { type: Array },
            exercises: { type: Array },
            totalVideos: { type: Number },
            totalReadings: { type: Number },
            totalExercises: { type: Number },
            videoTime: {type: Number},
            totalTime: {type: Number}
        }

    static styles = css`
        * {
            color: blue,
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .content {
            display: flex;
            flex-direction: column;
            border-top: 1px solid black;
            justify-content: space-between;
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
        .content-divider {
            border-bottom: 1px solid black;
        }
        .content-title {
            flex: 1;
        }
    `;

    constructor() {
        super();
        this.videos = [];
        this.readings = [];
        this.exercises = [];
    }

    totalContent() {
        this.totalVideos = this.videos.length;
        this.totalReadings = this.readings.length;
        this.totalExercises = this.exercises.length;
    }

    render() {
        return html`
            <div class="content">
                <div class="videos content-divider">
                ${this.videos.map((video) => html`
                    <div class="content-item">
                        <div class="content-title">${video.Title}</div>
                        <div class="duration">${video.Duration} minutes</div>
                    </div>
                `)}
                </div>
                <div class="readings content-divider">
                ${this.readings.map((reading) => html`
                    <div class="content-item">
                        <div class="content-title">${reading.Title}</div>
                        <div class="duration">${reading.Duration} minutes</div>  
                    </div>
                `)}
                </div>
                <div class="exercises content-divider">
                ${this.exercises.map((exercise) => html`
                    <div class="content-item">
                        <div class="content-title">${exercise.Title}</div>
                        <div class="duration">${exercise.Duration} minutes</div>
                    </div>
                `)}
                </div>
            </div>
        `;
    }
}

customElements.define('learning-content', LearningContent);