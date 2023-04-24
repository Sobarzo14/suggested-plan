import { LitElement, html, css } from 'lit';
import './week-plan.js';
import './learning-content.js';

class WeekList extends LitElement {
    static properties = {
            weekArray: { type: Array },
            number: { type: Number },
    };

    static styles = css`
        .weeks {
            display: flex;
            flex-direction: column;
        }
        * {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

    `;

    constructor() {
        super();
        this.weekArray = []
        this.number = 0;
        this.fillContent();
    }

    async fillContent() {
        const address = new URL("../api/content.json", import.meta.url).href;
        fetch(address).then((response) => {
            if (response.ok){
                return response.json();
            }
            return [];
        }).then((data) => {
            this.weekArray = data.Weeks;
        });
    }  

    weekNumber() {
        this.number += 1;
        return this.number;
    }
    
    
    render() {
        return html `
            <div class="weeks">
                ${this.weekArray.map((week) => 
                    html `
                    <div class="week">
                        <week-plan 
                        weekTitle=${week.title}
                        .content=${week}
                        description=${week.description}
                        .videos=${week.videos}
                        ${console.log(week.videos)}
                        .readings=${week.readings}
                        .exercises=${week.exercises}
                        number=${this.weekNumber()}
                        >
                            <learning-content
                            .videos=${week.videos}
                            .readings=${week.readings}
                            .exercises=${week.exercises}
                            >
                            </learning-content>
                        </week-plan>
                    </div>
                `)}
            </div>
        `;
    }
}

customElements.define('week-list', WeekList);