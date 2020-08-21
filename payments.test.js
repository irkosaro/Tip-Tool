it('should not add a new payment on submitPaymentInfo() with empty input', function () {
    billAmtInput.value = '';
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(0);
  });