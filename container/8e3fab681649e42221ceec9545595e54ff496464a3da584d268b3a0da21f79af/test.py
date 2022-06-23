# This does not include WebPageTest submission, only an illustration
# how to use the Logging API from the WebDriver Python bindings.

from selenium import webdriver
from selenium.webdriver.common import keys

driver = webdriver.Chrome(
    executable_path="chromedriver2_server",
    desired_capabilities={'loggingPrefs': {'profiler': 'INFO'}})

# Hack the Logging API into the Python remote driver.
# Not implemented in Selenium, patch welcome!!
driver.command_executor._commands.update({
    'getAvailableLogTypes': ('GET', '/session/$sessionId/log/types'),
    'getLog': ('POST', '/session/$sessionId/log')})

try:
  print 'Available log types:', driver.execute('getAvailableLogTypes')['value']
  driver.get('http://news.google.com')
  elem = driver.find_element_by_name('q') # Find the query box
  elem.send_keys('GTAC 2013' + keys.Keys.RETURN)
  elem = driver.find_element_by_link_text('Web')
  elem.click()
  print 'Profiler log:', driver.execute('getLog', {'type': 'performance'})['value']
finally:
  driver.quit()