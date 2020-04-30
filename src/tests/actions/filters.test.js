import moment from 'moment';
import {setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate} from "../../actions/filters";

test('should generate set start action obj', () => {

        const action = setStartDate(moment(0));
        expect(action).toEqual({
            type: "SET_START_DATE",
            startDate: moment(0)
        })
    }
)
test('should generate set end action obj', () => {
        const action = setEndDate(moment(0));
        expect(action).toEqual({
            type: "SET_END_DATE",
            endDate: moment(0)
        })
    }
)

test('should generate sortByAmount action obj', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT"
    })
})

test('should generate sortByDate action obj', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: "SORT_BY_DATE"
    })
})

test('should generate setText action obj with provided value', () => {
    const text = "keyword"
    const action = setTextFilter(text)
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: text
    })
})

test('should generate setText action obj with default value', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ""
    })
})