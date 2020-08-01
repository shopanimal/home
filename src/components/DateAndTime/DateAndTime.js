import React from 'react';
import PropTypes from 'prop-types';
import { differenceInDays } from 'date-fns'
import { formatDistanceToNow } from 'date-fns'
import { format } from 'date-fns'

const DateAndTime =({date})=> {
    const diffDay = differenceInDays(new Date(), new Date(date))
    const aboutDate = formatDistanceToNow(
        new Date(date)
      )
    const showDay = format(new Date(date), 'dd/MM/yyyy')
    if(diffDay<=7){
        return(aboutDate)
    }
    if(diffDay>7){
        return(showDay)
    }
};

DateAndTime.propTypes = {
    
};

export default DateAndTime;