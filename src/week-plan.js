import { LitElement, html, css } from 'lit';

class WeekPlan extends LitElement {
    static properties = {
        number: { type: Number },
        time: { type: Number },
        weekTitle: { type: String },
        description: { type: String },
        videos: { type: Array },
        readings: { type: Array },
        exercises: { type: Array },
        content: { type: Object }, 
        totalVideos: { type: Number },
        totalReadings: { type: Number },
        totalExercises: { type: Number },
        videoTime: {type: Number},
        totalTime: {type: Number}   
    };

    static styles = css`
        div {
            padding: 16px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .see-all {
            display: inline;
            padding: 8px;
        }
        .week {
            width: 100%;
            display: flex;
            flex-direction: row;
            border-bottom: 2px solid #afafaf;
        }
        .week-info {
            display: flex;
            flex-direction: column;
        }
        .week-word {
            font-size: 24px;
        }
        .week-number {
            font-size: 36px;
        }
        .content {
            display: flex;
            flex-direction: column;
        }
        .week-breakdown {
            display: inline;
        }
    `;

    constructor() {
        super();
        this.number = 0;
        this.time = 0;
        this.weekTitle = "";
        this.description = "";
        this.videos = [];
        this.readings = [];
        this.exercises = [];
        this.videoTime = 0;
        this.totalTime = 0;
    }

    totalContent() {
        this.videos.map((video) => {
            this.videoTime += video.Duration;
            console.log(this.videoTime)
            return this.videoTime;
        })
        this.readings.map((reading) => {
            this.totalTime += reading.Duration;
        })
        this.exercises.map((exercise) => {
            this.totalTime += exercise.Duration;
        })
        this.totalTime += this.videoTime;
        console.log(this.totalTime);
    }

    // toggleEvent() {
    //     const state = this.shadowRoot.querySelector('details').getAttribute('open') === "";
    //     this.openDetails = state;
    // }

    // updated(changedProperties) { 
    //     changedProperties.forEach((oldValue, propName) => {
    //         if (propName === 'openDetails') {
    //             this.dispatchEvent(new CustomEvent('opened-changed',
    //             {
    //                 composed: true, 
    //                 bubbles: true,
    //                 cancelable: false,
    //                 detail: {
    //                 value: this[propName]}}))
    //             }
    //     });
    // }

    render() {
        return html`
            <div class="week">
                <div class="week-info">
                    <div class="week-word">Week</div>
                    ${this.totalContent()}
                    <div class="week-number">${this.number}</div>
                </div>
                <div class="content">
                    <div class="time-total">${this.totalTime} minutes to complete</div>
                    <div class="week-title">${this.weekTitle}</div>
                    <div class="week-description">${this.description}</div>
                    ${console.log(this.content.videos.length)}
                    <div class="week-breakdown">${this.content.videos.length} videos (Total ${this.videoTime} min), ${this.content.readings.length} readings, ${this.content.exercises.length} quizzes<a class="see-all" href="#">See All</a></div>
                    <div class="week-content">
                        <learning-content .videos=${this.content.videos} .readings=${this.content.readings} .exercises=${this.content.exercises}></learning-content>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('week-plan', WeekPlan);
