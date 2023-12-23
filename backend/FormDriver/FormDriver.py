from enum import Enum
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
from contextlib import contextmanager
import time


# class Locator:
#     def __init__(self, type, value):
#         self.type = type
#         self.value = value

#     def get_data(self):
#         return (self.type, self.value)


# Requires type Locator for iframe_locator
@contextmanager
def create_driver(page_url, iframe_locator=None):
    try:
        # options = Options()
        # options.add_argument("--headless")
        driver = webdriver.Chrome()
        driver.get(page_url)
        if iframe_locator is not None:
            iframe = WebDriverWait(driver, 10).until(
                EC.presence_of_element_located(iframe_locator)
            )
            driver.switch_to.frame(iframe)
        yield driver
    except Exception as err:
        print("Unable to open iframe driver in main page")
        print(err)
        exit(1)
    finally:
        if iframe_locator is not None:
            driver.switch_to.default_content()
        driver.quit()


"""
This class stores all data for a form item. In CAIR_FORM_SELECTORS, I will replace the values with these objects. 
"""


class FormItem:
    class EltType(Enum):
        TEXT = 0
        RADIO = 1

    def get_selectors(self):
        return (self.selector_type, self.selector_value)

    def __init__(self, selector_type, selector_value, element_type):
        self.selector_type = selector_type
        self.selector_value = selector_value
        self.element_type = element_type


class FormDriver:
    def __init__(self, page_url, form_items, iframe_locator=None):
        self.page_url = page_url
        self.form_items = form_items
        self.iframe_locator = iframe_locator

    def get_element(self, driver, form_item):
        selector_type, selector_value = form_item.get_selectors()
        return driver.find_element(selector_type, selector_value)

    def input_to_form(self, driver, form_item, val):
        element = self.get_element(driver, form_item)

        if form_item.element_type == FormItem.EltType.TEXT:
            element.send_keys(val)
        elif form_item.element_type == FormItem.EltType.RADIO and val == "on":
            element.click()

    def data_valid(self, form_data):
        if set(form_data.keys()) == set(self.form_items.keys()):
            return True

        diff = set(self.form_items.keys()) - set(form_data.keys())
        if len(diff) > 0: 
            print("ERROR: Missing the following keys")
            print(diff)
        # else: 
        #     print("ERROR: form_data contains keys that aren't required")
        #     print(set(form_data.keys()) - set(self.form_items.keys()))
        
        return False

    # * The formDriver requires that form_data contains the keys for form_items. Nothing more, nothing less. If it contains extra keys, that's okay
    def submit_to_form(self, form_data):

        if not self.data_valid(form_data): 
            return False 
        
        try: 
            with create_driver(self.page_url, self.iframe_locator) as driver:
                for key, form_item in self.form_items.items():
                    value = form_data[key]
                    self.input_to_form(driver, form_item, value)

                print("completed")
                time.sleep(10)
        except Exception as err: 
            print("ERROR: Selenium driver failed")
            print(err)
            return False
        
        return True
