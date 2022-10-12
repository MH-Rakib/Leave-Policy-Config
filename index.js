$(document).ready(function () {
  $("#minDurationForSupportingDocumentBlock").hide();

  $("#requirementForSupportingDocument").change(function () {
    var selectedSupportingDoc = $(
      "#requirementForSupportingDocument option:selected"
    ).text();

    if (selectedSupportingDoc === "Duration Based") {
      $("#minDurationForSupportingDocumentBlock").show("slow");
    } else {
      $("#minDurationForSupportingDocumentBlock").hide("slow");
    }
  });

  $("#lifecycleLimitBlock").hide();

  $("#hasLifeCycle").change(function () {
    if ($("#hasLifeCycle").is(":checked")) {
      $("#lifecycleLimitBlock").show("slow");
    } else {
      $("#lifecycleLimitBlock").hide("slow");
    }
  });

  $("#allocationCriteriaBlock").hide();

  $("#hasAllocationCriteria").change(function () {
    if ($("#hasAllocationCriteria").is(":checked")) {
      $("#allocationCriteriaBlock").show("slow");
    } else {
      $("#allocationCriteriaBlock").hide("slow");
    }
  });

  $(".perCalanderYearAllocation").hide();
  $(".fixedFactorAllocation").hide();

  $("#allocationType").change(function () {
    var allocationType = $("#allocationType option:selected").text();

    if (allocationType === "Per Day Fixed Factor") {
      $(".perCalanderYearAllocation").hide("slow");
      $(".fixedFactorAllocation").show("slow");
    } else if (
      allocationType === "Calender Year Advance" ||
      allocationType === "Calender Month Advance"
    ) {
      $(".perCalanderYearAllocation").show("slow");
      $(".fixedFactorAllocation").hide("slow");
    } else {
      $(".perCalanderYearAllocation").hide();
      $(".fixedFactorAllocation").hide();
    }
  });

  $("#willExpireInDaysBlock").hide();

  $("#hasExpiry").change(function () {
    if ($("#hasExpiry").is(":checked")) {
      $("#willExpireInDaysBlock").show("slow");
    } else {
      $("#willExpireInDaysBlock").hide("slow");
    }
  });

  $("#autoDeductionPriorityBlock").hide();

  $("#isAutoDeductable").change(function () {
    if ($("#isAutoDeductable").is(":checked")) {
      $("#autoDeductionPriorityBlock").show("slow");
    } else {
      $("#autoDeductionPriorityBlock").hide("slow");
    }
  });

  $("#leaveDurationStartegyBlock").hide();

  $("#isHalfdayAllowed").change(function () {
    if ($("#isHalfdayAllowed").is(":checked")) {
      $("#leaveDurationStartegyBlock").show("slow");
    } else {
      $("#leaveDurationStartegyBlock").hide("slow");
    }
  });

  $("#monthlyMaxLimitBlock").hide();

  $("#hasMonthlyMaxLimit").change(function () {
    if ($("#hasMonthlyMaxLimit").is(":checked")) {
      $("#monthlyMaxLimitBlock").show("slow");
    } else {
      $("#monthlyMaxLimitBlock").hide("slow");
    }
  });

  $("#encashmentCriteriaBlock").hide();

  $("#encashmentCriteria").change(function () {
    if ($("#encashmentCriteria").is(":checked")) {
      $("#encashmentCriteriaBlock").show("slow");
    } else {
      $("#encashmentCriteriaBlock").hide("slow");
    }
  });

  $("#yearlyForwardLimitBlock").hide();

  $("#isEncashableEachYear").change(function () {
    if ($("#isEncashableEachYear").is(":checked")) {
      $("#yearlyForwardLimitBlock").show("slow");
    } else {
      $("#yearlyForwardLimitBlock").hide("slow");
    }
  });

  $("#forwardingLimitOnLifetimeBlock").hide();

  $("#isForwardable").change(function () {
    if ($("#isForwardable").is(":checked")) {
      $("#forwardingLimitOnLifetimeBlock").show("slow");
    } else {
      $("#forwardingLimitOnLifetimeBlock").hide("slow");
    }
  });
});
