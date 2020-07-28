<?php 
abstract class ParentControl {
	protected $servername, $dbname, $username, $password;
	protected $response;
	
	public function __construct(){
		
		$confidential_contents = json_decode($this->obj_model->readConfidential(), true);
		
		// $this->servername = $confidential_contents["database"]["local"]["servername"];
		// $this->dbname = $confidential_contents["database"]["local"]["dbname"];
		// $this->username = $confidential_contents["database"]["local"]["username"];
		// $this->password = $confidential_contents["database"]["local"]["password"];

		$this->servername = $confidential_contents["database"]["biz"]["servername"];
		$this->dbname = $confidential_contents["database"]["biz"]["dbname"];
		$this->username = $confidential_contents["database"]["biz"]["username"];
		$this->password = $confidential_contents["database"]["biz"]["password"];
	}
	
	public function run($method){
		$task = $this->obj_model->filterFormData($method["task"]);
		switch ($task){
			case "SQL_EXTRACT":
				$this->response = $this->obj_model->pdoConnect($this->servername, $this->dbname, $this->username, $this->password);
				if ($this->response == 1){
					//================= Call pdoSetData / pdoGetData as required =====================
					$statement = $this->obj_model->filterFormData($method["sql_stmt"]);
					$this->return_obj = $this->obj_model->getPDOData($statement);
					$this->obj_model->renderJSON($this->return_obj);
					//================================================================================		
					$this->obj_model->closeConnection();
				}else{
					$this->return_obj = $this->response;
					$this->obj_model->renderJSON($this->return_obj);
				}
				break;
			case "SQL_UPDATE":
				$this->response = $this->obj_model->pdoConnect($this->servername, $this->dbname, $this->username, $this->password);
				if ($this->response == 1){
					//================= Call pdoSetData / pdoGetData as required =====================
					$statement = $this->obj_model->filterFormData($method["sql_stmt"]);
					$this->return_obj = $this->obj_model->setPDOData($statement);
					$this->obj_model->renderJSON($this->return_obj);
					//================================================================================		
					$this->obj_model->closeConnection();
				}else{
					$this->return_obj = $this->response;
					$this->obj_model->renderJSON($this->return_obj);
				}
				break;
			case "GET_SESSION":
				$items = $method["items"];
				$arr_sess = array();
				for ($i=0; $i<sizeof($items); $i++){
					if ( isset($_SESSION[$items[$i]]) ){
						$arr_sess[$i] = $_SESSION[$items[$i]];
					}
				}
				if ( count($arr_sess) > 0 ){
					$this->obj_model->renderJSON( array("result" => $arr_sess) );
				}else{
					$this->obj_model->renderJSON( array("error" => "Session variable not detected") );
				}
				break;
			case "SET_SESSION":
				$items = $method["items"][0];					
				foreach ($items as $key=>$item){
					$_SESSION[$key] = $this->obj_model->filterFormData($item);
				}
				$this->obj_model->renderJSON($items);	
				break;
			case "CLEAR_SESSION":
				session_unset();
				break;
			case "GET_SERVER_TIME":
				$time = date("YmdHis");
				echo $time;
				break;
			case "SEND_EMAIL":
				$to = $this->obj_model->filterFormData($method["to"]);
				$subject = $this->obj_model->filterFormData($method["subject"]);
				$msg = $this->obj_model->filterFormData($method["msg"]);
				$this->obj_model->sendEmail($to, $subject, $msg);
				break;
			default:
				$this->obj_model->renderJSON(array("invalid"=>"Invalid Choice"));
		}
	}
}
?>