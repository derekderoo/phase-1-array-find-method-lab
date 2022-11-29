function superbowlWin(record) {
    function searchRecord(record){
        return (record.result === "W")
    }
    let item = record.find(searchRecord);
    if (!!item === true) {
        return item.year
    }
  }