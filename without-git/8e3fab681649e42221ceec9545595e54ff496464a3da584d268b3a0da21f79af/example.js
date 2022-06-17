const ContactUsForm = props => {
    return (
        <Form>
            <Input type="text" name="name" />
            <Input type="text" name="email" />
            <Input type="textarea" name="message" />
            <Button type="submit" value="Submit" onClick={props.handleClick} />
        </Form>
    )
  }
