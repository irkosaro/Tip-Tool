
it('shoud calcutate the percentage of tip'), function () {
    expect(calculateTipPercent(50, 10)).toEqual(20)
}

it('should sum total tip percent on sumPaymentTotal()', function () {

    billAmtInput.value = 100;
    tipAmtInput.value = 40;

    submitPaymentInfo();

    expect(sumPaymentTotal('tipPercent')).toEqual(40);
  });