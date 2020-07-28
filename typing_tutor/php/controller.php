<?php 
session_start();

include_once "../parent/controller.php";
include_once "../parent/model.php";
include_once "model.php";

class Control extends ParentControl {
	protected $obj_model;
	protected $return_obj;
	public function __construct() {
		$this->obj_model = new Model();
		parent::__construct($this->servername, $this->dbname, $this->username, $this->password, $this->response);
	}
}

$obj_control = new Control();
$obj_control->run($_POST); //$_GET or $_POST as argument

?>