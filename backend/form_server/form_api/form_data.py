from FormDriver import *

TEXT, RADIO = FormItem.EltType.TEXT, FormItem.EltType.RADIO

CAIR_FORM_URL = "https://www.cair.com/report/"
CAIR_IFRAME_LOCATER = (
    By.CSS_SELECTOR,
    'iframe[title="CAIR National Civil Rights Intake"]',
)
CAIR_FORM_ELEMENTS = {
    # "incident_date": FormItem(By.ID, "lite_mode_20", TEXT),
    "first_name": FormItem(By.NAME, "q3_yourFull[first]", TEXT),
    "last_name": FormItem(By.NAME, "q3_yourFull[last]", TEXT),
    "email": FormItem(By.NAME, "q6_yourEmail", TEXT),
    "religion": FormItem(By.NAME, "q17_religion", TEXT),
    "race_ethnic_background": FormItem(By.NAME, "q11_raceethnicity", TEXT),
    "phone": FormItem(By.NAME, "q7_yourPhone[full]", TEXT),
    # "government_agency": FormItem(By.NAME, "q18_governmentAgency", TEXT),
    # "company_name": FormItem(By.NAME, "q19_typeA", TEXT),
    "city": FormItem(By.NAME, "q13_city13", TEXT),
    "state": FormItem(By.NAME, "q5_state", TEXT),
    "incident_details": FormItem(By.NAME, "q21_detailsOf", TEXT),
    "authorize_media_yes": FormItem(By.ID, "input_23_0", RADIO),
    "authorize_media_no": FormItem(By.ID, "input_23_1", RADIO),
}
# CAIR_KEYS = CAIR_FORM_ELEMENTS.keys()

DPSS_FORM_URL = (
    "https://dpss.umich.edu/content/services/report-a-crime/submit-online-form/"
)
DPSS_FORM_ELEMENTS = {
    "first_name": FormItem(By.ID, "report-crime1", TEXT),
    "last_name": FormItem(By.ID, "report-crime2", TEXT),
    "address": FormItem(By.ID, "report-crime3", TEXT),
    # "address2": FormItem(By.ID, "report-crime4", TEXT),
    "city": FormItem(By.ID, "report-crime5", TEXT),
    "state": FormItem(By.ID, "report-crime6", TEXT),
    "zip": FormItem(By.ID, "report-crime7", TEXT),
    "email": FormItem(By.ID, "report-crime8", TEXT),
    "phone": FormItem(By.ID, "report-crime9", TEXT),
    "incident_details": FormItem(By.ID, "report-crime10", TEXT),
}
# DPSS_KEYS = DPSS_FORM_ELEMENTS.keys()


ECRT_FORM_URL = "https://ecrt.umich.edu/file-a-report/reporting-form/"
ECRT_FORM_ELEMENTS = {
    "first_name": FormItem(By.ID, "field_5xlwa", TEXT),
    "email": FormItem(By.ID, "field_m8jbx", TEXT),
    "phone": FormItem(By.ID, "field_g91ui", TEXT),
}

# * Most important driver map
# * We should dynamically generate certain fields
DRIVER_MAP = {
    "cair": FormDriver(CAIR_FORM_URL, CAIR_FORM_ELEMENTS, CAIR_IFRAME_LOCATER),
    "dpss": FormDriver(DPSS_FORM_URL, DPSS_FORM_ELEMENTS),
    "ecrt": FormDriver(ECRT_FORM_URL, ECRT_FORM_ELEMENTS)
}

# KEY_MAP = {"cair": CAIR_KEYS, "dpss": DPSS_KEYS}

# def authorize_media(curr_value):
#     return {
#         "authorize_media_yes": curr_value
#         "authorize_media_no": !curr_value
#     } 

# BOOL_SELECT_MAP = {
#     "cair": {
#         "authorize_media": ["authorize_media_yes", "authorize_media_no"]
#     }
# }