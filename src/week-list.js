import { LitElement, html, css } from 'lit';
import './week-plan.js';

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
                        title=${week.title}
                        ${console.log(week.title)} 
                        content=${week}
                        ${console.log(week)}
                        description=${week.description}
                        videos=${week.videos}
                        readings=${week.readings}
                        exercises=${week.exercises}
                        number=${this.weekNumber()}
                        ></week-plan>
                    </div>
                `)}
            </div>
        `;
    }
}

customElements.define('week-list', WeekList);