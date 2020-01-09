function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    let oldCar = startPriceOld;
    let newCar = startPriceNew;
    let rate = percentLossByMonth;
    let savings = 0;
    let months = 0;
    
    while(savings + oldCar < newCar){
      months++;
      if (months % 2 === 0){
        rate += 0.5;
      }
      
      oldCar -= (oldCar * (rate / 100));
      newCar -= (newCar * (rate / 100));
      savings += savingperMonth;
    }
    
    let change = (savings + oldCar) - newCar;
    
    return [months, change.toFixed(0) * 1];
  }