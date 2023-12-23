from FormDriver import *

TEXT, RADIO = FormItem.EltType.TEXT, FormItem.EltType.RADIO

CAIR_FORM_URL = "https://www.cair.com/report/"
CAIR_IFRAME_LOCATER = (
    By.CSS_SELECTOR,
    'iframe[title="CAIR National Civil Rights Intake"]',
)
CAIR_FORM_ELEMENTS = {
    "incident_date": FormItem(By.ID, "lite_mode_20", TEXT),
    "first_name": FormItem(By.NAME, "q3_yourFull[first]", TEXT),
    "last_name": FormItem(By.NAME, "q3_yourFull[last]", TEXT),
    "your_email": FormItem(By.NAME, "q6_yourEmail", TEXT),
    "religion": FormItem(By.NAME, "q17_religion", TEXT),
    "race_ethnic_background": FormItem(By.NAME, "q11_raceethnicity", TEXT),
    "phone": FormItem(By.NAME, "q7_yourPhone[full]", TEXT),
    "government_agency": FormItem(By.NAME, "q18_governmentAgency", TEXT),
    "company_name": FormItem(By.NAME, "q19_typeA", TEXT),
    "city": FormItem(By.NAME, "q13_city13", TEXT),
    "state": FormItem(By.NAME, "q5_state", TEXT),
    "incident_details": FormItem(By.NAME, "q21_detailsOf", TEXT),
    "authorize_media_yes": FormItem(By.ID, "input_23_0", RADIO),
    "authorize_media_no": FormItem(By.ID, "input_23_1", RADIO),
}
CAIR_KEYS = {
    "incident_date",
    "first_name",
    "last_name",
    "your_email",
    "religion",
    "race_ethnic_background",
    "phone",
    "government_agency",
    "company_name",
    "city",
    "state",
    "incident_details",
    "authorize_media_yes",
    "authorize_media_no",
}

DPSS_FORM_URL = (
    "https://dpss.umich.edu/content/services/report-a-crime/submit-online-form/"
)
DPSS_FORM_ELEMENTS = {
    "first_name": FormItem(By.ID, "report-crime1", TEXT),
    "last_name": FormItem(By.ID, "report-crime2", TEXT),
    "address1": FormItem(By.ID, "report-crime3", TEXT),
    "address2": FormItem(By.ID, "report-crime4", TEXT),
    "city": FormItem(By.ID, "report-crime5", TEXT),
    "state": FormItem(By.ID, "report-crime6", TEXT),
    "zip": FormItem(By.ID, "report-crime7", TEXT),
    "email": FormItem(By.ID, "report-crime8", TEXT),
    "phone": FormItem(By.ID, "report-crime9", TEXT),
    "details": FormItem(By.ID, "report-crime10", TEXT),
}
DPSS_KEYS = {
    "first_name",
    "last_name",
    "address1",
    "address2",
    "city",
    "state",
    "zip",
    "email",
    "phone",
    "details",
}


# * Most important driver map
DRIVER_MAP = {
    "cair": FormDriver(CAIR_FORM_URL, CAIR_FORM_ELEMENTS, CAIR_IFRAME_LOCATER),
    "dpss": FormDriver(DPSS_FORM_URL, DPSS_FORM_ELEMENTS),
}

KEY_MAP = {"cair": CAIR_KEYS, "dpss": DPSS_KEYS}
