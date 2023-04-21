import { LitElement, html, css } from 'lit';

class WeekPlan extends LitElement {
    static properties = {
        number: { type: Number },
        time: { type: Number },
        title: { type: String },
        description: { type: String },
        videos: { type: Array },
        readings: { type: Array },
        exercises: { type: Array },
        content: { type: Object },    
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
        this.title = "";
        this.description = "";
        this.content = {};
    }

    render() {
        return html`
            <div class="week">
                <div class="week-info">
                    <div class="week-word">Week</div>
                    <div class="week-number">${this.number}</div>
                </div>
                <div class="content">
                    <div class="time-total">${this.time} to complete</div>
                    <div class="week-title">${this.title}</div>
                    <div class="week-description">${this.description}</div>
                    <div class="week-breakdown">9 videos (Total 41 min), 2 readings, 3 quizzes<a class="see-all" href="#">See All</a></div>
                    <div class="week-content">
                        <learning-content videos=${this.content.videos} readings=${this.content.readings} exercises=${this.content.exercises}></learning-content>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('week-plan', WeekPlan);
