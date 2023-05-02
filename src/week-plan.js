import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import './learning-content.js';

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
        totalTime: {type: Number},
        display: {type: String},
        elementVisible: {type: Boolean},
        open: {type: Boolean}
    };

    static styles = css`
        div {
            padding: 16px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .icon-container {
        height: 25px;
        width: 25px;
        border-radius: 50%;
        display: inline-block;
        padding: 5px;
        margin: 0px 5px 0px 0px;
        text-align: center;
        }
        .icon-container.time {
            background: linear-gradient(0.25turn,#fb814e,#f6b343);
        }
        .icon-container.content-icon {
            background: linear-gradient(0.25turn,#45c9b4,#3bb3d5);
        }
        .hidden {
            display: none;
        }
        .see-all {
            display: inline;
            padding: 8px;
            background: none;
            border: none;
            color: blue;
            text-decoration: underline;
            cursor: pointer;
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
        this.display = "See All"
        this.videos = [];
        this.readings = [];
        this.exercises = [];
        this.totalVideos = 0;
        this.totalReadings = 0;
        this.totalExercises = 0;
        this.videoTime = 0;
        this.totalTime = 0;
        this.elementVisible = false;
        
    }

    totalContent() {
        this.videos.map((video) => {
            this.videoTime += video.Duration;
            return this.videoTime;
        })
        this.totalTime += this.videoTime;
        this.readings.map((reading) => {
            this.totalTime += reading.Duration;
        })
        this.exercises.map((exercise) => {
            this.totalTime += exercise.Duration;
        })
        this.totalVideos = this.videos.length;
        this.totalReadings = this.readings.length;
        this.totalExercises = this.exercises.length;
    }
    
    openChanged() {
        this.open ? this.display = "See All" : this.display = "Hide All";
        this.open = !this.open;
        this.renderRoot.querySelector('learning-content').classList.toggle('hidden');
    }

    updated(changedProperties) { 
        changedProperties.forEach((oldValue, propName) => {
            if (propName === 'open') {
                this.dispatchEvent(new CustomEvent('opened-changed',
                {
                    composed: true, 
                    bubbles: true,
                    cancelable: false,
                    detail: {
                    value: this[propName]}}))
                }
            if (propName == 'videos') {
                this.totalContent();
            }
        });
    }

    render() {
        return html`
            <div class="week">
                <div class="week-info">
                    <div class="week-word">Week</div>
                    <div class="week-number">${this.number}</div>
                </div>
                <div class="content">
                    <div class="time-total">
                    <span class="icon-container time">
                    <simple-icon icon="device:access-time" style="--simple-icon-color:white" accent-color="grey" dir="ltr" contrast="0"></simple-icon>
                    </span>
                    ${this.totalTime} minutes to complete</div>
                    <div class="week-title">${this.weekTitle}</div>
                    <div class="week-description">${this.description}</div>
                    <div class="week-breakdown">
                    <span class="icon-container content-icon">
                    <simple-icon icon="hardware:desktop-mac" style="--simple-icon-color:white" accent-color="grey" dir="ltr" contrast="0"></simple-icon>
                    </span>
                    ${this.totalVideos} videos (Total ${this.videoTime} min), ${this.totalReadings} readings, ${this.totalExercises} quizzes<button class="see-all" open=false href="#" @click=${this.openChanged}>${this.display}</button></div>
                        <learning-content class="hidden" .videos=${this.content.videos} .readings=${this.content.readings} .exercises=${this.content.exercises}></learning-content>

                </div>
            </div>
        `;
    };
}

customElements.define('week-plan', WeekPlan);
