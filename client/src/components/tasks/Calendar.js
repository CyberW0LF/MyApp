import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

class Calendar extends Component {
  constructor() {
    super();
    BigCalendar.Views = {
      AGENDA: "agenda",
      DAY: "ДЕНЬ",
      MONTH: "month",
      WEEK: "week"
    };
    this.state = {
      localizer: BigCalendar.momentLocalizer(moment),
      //   views: BigCalendar.Views(
      //     "month" | "week" | "work_week" | "День" | "agenda"
      //   ),
      events: [
        {
          start: new Date(),
          end: new Date(moment().add(1, "hour")),
          title: "Заявка",
          allDay: true
        }
      ]
    };
    this.loadData();
    console.info(BigCalendar);
  }

  loadData = async () => {
    const respons = await fetch("http://localhost:3001/api/equipment");
    const data = await respons.json();
    console.log(data);
    let events = data.map(
      ({ startDate, endDate, kabinet, mouse, screen, powerStrip }) => ({
        start: new Date(startDate),
        end: new Date(endDate),
        title: `Аудитория: ${kabinet}
        Ноутбук${screen ? ", Экран" : ""}  ${mouse ? ", Мышь" : ""}
        `
      })
    );
    this.setState({ events });
  };

  render() {
    return (
      <div>
        <BigCalendar
          localizer={this.state.localizer}
          events={this.state.events}
          components={{
            month: {
              dateHeader: props => <div>Custom Date Header</div>
            }
          }}
          startAccessor="start"
          toolbar={true}
          popup
          endAccessor="end"
          min={new Date(1538985600000)}
          max={new Date(1539021600000)}
          slotPropGetter={date => ({
            style: {
              backgroundColor: "white"
            }
          })}
          eventPropGetter={e => {
            return {
              className: "",
              style: {
                backgroundColor: "#c4daff",
                color: "black",
                borderRadius: "5px",
                border: "none"
              }
            };
          }}
        />
      </div>
    );
  }
}

export default Calendar;
