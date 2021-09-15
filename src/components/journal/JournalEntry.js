import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div 
                className="journal__entry-picture"
                style = {
                    {
                        backgroundSize: "cover",
                        backgroundImage : "url(https://indiehoy.com/wp-content/uploads/2020/12/shrek-1200x900.jpg)"
                    }
                }
            ></div>

            <div className="journal__entry-body">
                <p className="jouranl__entry-content">
                    A new Day
                </p>
                <p className="jouranl__entry-content">
                    Lorem ipsum Lorem ipsum 
                </p>
            </div>
            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
