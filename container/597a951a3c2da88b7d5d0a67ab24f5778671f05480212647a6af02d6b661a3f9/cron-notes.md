### OPTIONS
The options are as follows:   
`-e`   Edit the current crontab using the editor specified by the VISUAL or EDITOR environment variables.   
`-l`   Causes the current crontab to be displayed on standard output.    
`-r`   Causes the current crontab to be removed.   


### EXAMPLES
| Command              | Description  |
| :------------------: |:-------------|
| `* * * * 5 who`      | Will run the who command every minute, of every hour, of every month, for each Friday |
| `5 * * * * who`      | Will run the who command on the fifth minute, of every hour, of every month, for all days of the week |
| `0 0 * * * who`      | every day at midnight |
| `*/15 * * * * who`   | Will run the who command every 15th minute, of every hour, of every month,  for all days of the week. The /15 being in place of frequency of Minutes. |



 
### CRON SYNTAX
`minute` `hour` `dayOfMonth` `month` `dayOfWeek` **COMMAND**   
     
| Part     | Range |
| :------- | :---- |
| Minute   | 0-59 | 
| Hour     | 0-23 | 
| Day of Month | 1-31 | 
| Month | 1-12 or Jan-Dec | 
| Day of Week | 0-6 or Sun-Sat | 
     
     
### FULL EXAMPLE

**Type the following items in the command/terminal:**  
   
1. Start the crontab tool `crontab -e`
2. You will be switched to an unusual looking interface, also called the Vi Editor. Press the `i` key to Insert your cron command.  
3. Now type the following: `*/15 * * * * yourcommand` _every fifteenth minute of every hour of every day_   
4. Now press the `Esc` key. 
5. Type `:wq` exactly and press `enter` when done. You should see: `crontab: installing new crontab`
    
    

